class services {

    constructor (data) {

        // Remove class active from html elements of NodeList(like and array but not an array)
        this.removeActiveClass = (arr) => {
           Array.from(arr).forEach( (element) =>  element.classList.remove('active'))
        }

        // Add class active to an element
        this.addActiveClass = (target) => {
            target.classList.add('active');
        }

        // Toggle class active from an element
        this.toggleActiveClass = (target) => {
            target.classList.add('active');
        }

    }
    
}

// Freeze object to make sure nobody can add, edit or delete property and makeing a private variable of services
export default Object.freeze(new services());

   