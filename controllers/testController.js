const testController = (req,res) => {
    res.status(200).send({
        message: "welcome server",
        success: true,
    });
};

module.exports = {testController}; 