const checkout = {
    items: [],
    total: 0,

    addItem(item) {
        const price = parseFloat(item.price);

        if (!item.name || isNaN(price) || typeof price !== 'number') {
            console.log(" Invalid item. Must have a valid name and numeric price.");
            return false;
        }

        this.items.push({ name: item.name, price });
        this.total += price;

        console.log(` Added "${item.name}" for $${price.toFixed(2)}`);
        return true;
    },

    getTotal() {
        return `Total: $${this.total.toFixed(2)}`;
    }
};

