const Message = require("../model/Message");
const saveMsg = async (data) => {
  try {
    const saveMsg = new Message(data);
    await saveMsg.save();
    return saveMsg;
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};
const getMsg = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.status(400).send({ msg: "User id required." });
    }
    const allMsg = await Message.find({
      $or: [{ "sender._id": id }, { "receiver._id": id }],
    });
    console.log(allMsg);
    return res.send({
      data: allMsg,
      msg: "allMSg",
    });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};
const delMsg = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.status(400).send({ msg: "User id required." });
    }
    const delMsg = await Message.findByIdAndDelete(id);
    return res.send({
      data: delMsg,
      msg: "delMsg",
    });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = {
  saveMsg,
  getMsg,
  delMsg,
};
