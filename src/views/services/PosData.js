import AddIncome from '../../components/forms/income/AddIncome';
import IncomeHead from '../../components/forms/income/IncomeHead';
import AddProductForm from '../../components/forms/product/AddProductForm';
// import Cashier from '../../components/point of sale/Cashier';


const PosData=[
    {
        text:"Add Product",
        icon:"fas fa-cog",
        TagName:AddProductForm,
    },
    {
        text:"Cashier Panel",
        icon:"fas fa-cog",
        TagName:AddIncome,
    },
    {
        text:"Reports",
        icon:"fas fa-cog",
        TagName:IncomeHead,
    },
    {
        text:"Product Managment",
        icon:"fas fa-cog",
        TagName:IncomeHead,
    },
   

]
export default PosData;