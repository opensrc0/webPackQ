class setter {

    constructor (data) {

        let _map = {}

        this.availableForm = (data) => {
            _map.availableFrom = data
        }

        this.floorNumber = (data) => {
            _map.floorNumber = data
        }

        this.flatNumber = (data) => {
            _map.flatNumber = data
        }

        this.unitFacing = (data) => {
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
        
    }
    
}

// Freeze object to make sure nobody can add, edit or delete property and makeing a private variable of _map
export default Object.freeze(new setter());

   