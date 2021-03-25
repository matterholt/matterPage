// Parent class obtains items that are common

class ingredients{

    // private fields, can not be changed directly outside of class
    _numberOfOrder = 0

    constructor(meat, bean, sauce){
        this.meat = meat;
        this.beans = bean;
        this.sauce = sauce;
    }

    getCostOfOrder(){
        // public or external interface
        let TotalAmount = calcPrice();
        return TotalAmount;
    }
    
    calcPrice(){
        // private, internal interface
        let someMagicFunctionForPrice = "$6.00";
        return someMagicFunctionForPrice;
    }

    itemOrder(){
        // public interface printing items chosen
        return console.log(`${this.meat}, ${this.bean}, ${this.sauce} have been added`);
    }

    addAnotherOrder(){
        // internal interface, 
        this._numberOfOrder++;
    }
}

class burrito extends ingredients{

    constructor(meat, bean, sauce){
        super(meat)
        super(bean)
        super(sauce)
    }



} 