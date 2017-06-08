import $http from './ajaxPromise'

class form2 {

    constructor() {
        
        // creating a private variable _map
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

        this.mapValues = (data) => {
            return _map
        }

        this.registerEvents = () => {
            document.querySelector("#floorNumber").addEventListener('keyup', (event) => this.floorNumber(event.target.value))
            document.querySelector("#flatNumber").addEventListener('keyup', (event) => this.flatNumber(event.target.value))
            document.querySelector("#bathRooms").addEventListener('click', (event) => this.bathRooms(event.target.innerHTML))
            // document.querySelector("#floorNumber").addEventListener('keyup', (event) => this.availableForm(event.target.value))
            // document.querySelector("#floorNumber").addEventListener('keyup', (event) => this.availableForm(event.target.value))
            // document.querySelector("#floorNumber").addEventListener('keyup', (event) => this.availableForm(event.target.value))
            document.querySelector("#papUpdate").addEventListener('click', (event) => {
                $http.ajaxCall('test.php', 'POST', this._map);
            })
        }
        this.registerEvents()
    }
}

var form2Obj = new form2({})

setInterval(()=>{
    console.log(form2Obj.mapValues());
}, 3000)