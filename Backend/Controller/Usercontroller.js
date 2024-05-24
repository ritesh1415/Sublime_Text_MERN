import Usermode from '../Model/Usermodel.js'
const Add = async (req, res) => {
    try {
        const newUser = new Usermode(req.body);
        await newUser.save();
        res.status(201).send("New custom field added successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

const CheckAvailability = async (req, res) => {
    try {
        const existingOption = await Usermode.findOne({ textfield:req.body.textfield});
 if(existingOption){
    return res.status(200).send({
        success: false,
        message: "not available",
    });
}
    return res.status(200).send({
        success: true,
        message: "available"

})
 
        // const { option } = req.body;
        // const isAvailable = option !== 'option2' || 'option3'|| 'option1'; 
        // res.status(200).json({ isAvailable });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

const fetchData = async (req, res) => {
    try {
        const allData = await Usermode.find();
        res.status(200).json(allData);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


export { Add, CheckAvailability,fetchData };
