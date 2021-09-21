import baseServices from "services/baseServices";

class QuanLyFood extends baseServices{
    constructor(){
        super()
    }

    fetchGetListFood = () => {
        return this.getMock('/food')
    }
}

export const quanLyFood = new QuanLyFood()