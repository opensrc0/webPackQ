import $http from './ajaxPromise'

class form2 {

    constructor() {
        
        /**
         * creating a private variable _map
         */ 
        let _map = {};

        this.availableForm = (data) => {
            _map.availableFrom = data
        }

        this.floorNumber = (data) => {
            _map.floorNumber = data
        }

        this.flatNumber = (data) => {
            _map.flatNumber = data
        }

        this. unitFacing = (data) => {
            _map.unitFacing = data
        }

        this.bathRooms = (data) => {
            _map.bathRooms = data
        }

        this.balconies = (data) => {
            _map.balconies = data
        }

        this.amenities = (data) => {
            _map.amenities = data
        }

        this.furnishing = (data) => {
            _map.furnishing = data
        }

        this.getValues = () => {
            return _map
        }

        this.registerEvents = () => {
            document.querySelector("#floorNumber").addEventListener('keyup', (event) => this.floorNumber(event.target.value))
            document.querySelector("#flatNumber").addEventListener('keyup', (event) => this.flatNumber(event.target.value))
            
            let clickEvents = document.querySelectorAll("#bathRooms, #balconies");
            
            Array.from(clickEvents).forEach(function(getElement) {
                getElement.addEventListener('click', (event) => {
                    let perentId = event.target.parentNode.id;                          // Get Parent Id
                    this[perentId](event.target.innerHTML);                             // Set Value of selected query like bathrooms balconies etc
                    removeActiveClass(event.target.closest(`#${perentId}`).children);   // remove active class from the list in front end
                    addActiveClass(event.target);                                       // add active class in selected element
                })
            },this); 
            
            // document.querySelector("#floorNumber").addEventListener('keyup', (event) => this.availableForm(event.target.value))
            // document.querySelector("#floorNumber").addEventListener('keyup', (event) => this.availableForm(event.target.value))
            // document.querySelector("#floorNumber").addEventListener('keyup', (event) => this.availableForm(event.target.value))
            document.querySelector("#papUpdate").addEventListener('click', (event) => {
                $http.ajaxCall('test.php', 'POST', this._map);
            })
        }
        this.registerEvents()

        let removeActiveClass = (list) => {
            for(let i = 0; i < list.length; i++) {
                list[i].classList.remove('active');
            }
        }

        let addActiveClass = (target) => {
            target.classList.add('active');
        }
    }
}

var form2Obj = new form2()

setInterval(()=>{
    console.log(form2Obj.getValues());
}, 3000)