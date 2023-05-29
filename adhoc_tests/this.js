const company = {
    name: "Karza",
    people: ['Ashutosh', 'Amit', 'Parth'],
    getTeamMembers() {
        this.people.forEach(p => {
            console.log(`${p} - ${this.name}`);
        })
    },
    getThis() {
        this.people.forEach(function(p) {
            // this over here points to global context
            // we dont know how forEach handles callback
            // hence for such cases, we can use arrow functions
            console.log(this);
        });

    },

    // working with getters and setters
    // similar to @property  in python
    get company_name() {
        return this._name;
    },

    set company_name(val) {
        if (!val.trim()) {
            throw new Error("Not allowed");
        }
        this._name = val;
    }
}

// company.getTeamMembers();
// company.getThis();

company.company_name = "Karza-Perfios";
console.log(company.company_name);