import $http from './ajaxPromise'
import getterSetter from './getterSetter'
import services from './services'
class form2 {

    constructor() {

         document.querySelector("#floorNumber").addEventListener('keyup', (event) => getterSetter.floorNumber(event.target.value))
         document.querySelector("#flatNumber").addEventListener('keyup', (event) => getterSetter.flatNumber(event.target.value))

        // Add id in ul tag and pass here for any click type property in front end
        let clickEventsSingleValue = document.querySelectorAll("#bathRooms, #balconies , #unitFacing");
        
        // We can use built in loop function on like-array using 'Array.from'
        Array.from(clickEventsSingleValue).forEach(function(getElement) {
            getElement.addEventListener('click', (event) => {
                // Get Parent Id of targetted element
                let perentId = event.target.closest('ul').id;

                // Set li as a targetting element to get data-attr value
                let getTargetLi = event.target.nodeName!='LI' ? event.target.closest('li') : event.target;

                // Set Value of selected query like bathrooms balconies etc
                getterSetter[perentId](getTargetLi.getAttribute('data-attr'));

                // Remove active class from the list in the front end       
                services.removeActiveClass(document.querySelectorAll(`#${perentId} li`));
                
                // Add active class in selected element
                services.addActiveClass(getTargetLi);
            })
        },this); 
        
        document.querySelector("#papUpdate").addEventListener('click', (event) => {
            $http.ajaxCall('test.php', 'POST', _map);
        })

    }
}

var form2Obj = new form2()

Object.preventExtensions(form2Obj);

setInterval(()=>{
    console.log(getterSetter.getValues());
}, 3000)