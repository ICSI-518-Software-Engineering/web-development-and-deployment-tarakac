const Item = require("../models/item.model");



exports.createProduct = async (req, res) => {
  try {
    const { name, quantity, image, price, description } = req.body;

    if (!name || !quantity || !image || !price || !description) {
      return res.status(400).json({ message: "All the fields are required" });
    }

    const newItem = await Item.create({ name, quantity, image, price, description });

    res.status(201).json({
      success: true,
      message: "Item created successfully",
      item: newItem,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProducts = async (req, res) => {
    try {
      const items = await Item.find();
      res.status(200).json({
        success: true,
        items,
      });
    } catch (error) {
      res.status(409).json({
        success: false,
        message: error.message,
      });
    }
  }

exports.updateProducts = async (req, res) => {
  try {
    const { id, name, quantity, price, description } = req.body;
    if (!name || !quantity || !id || !price || !description) {
      return res.status(400).json({ message: "Please fill required fields" });
    }

    const itemData = await Item.findById(id);
    if (!itemData) {
      return res.status(404).json({ message: "Item not found in DB" });
    }

    const updatedItem = {
      name: name,
      quantity: quantity,
      price: price,
      description: description,
    };
    
    await Item.findByIdAndUpdate(id, updatedItem, { new: true })

    console.log("updating item", itemData);
    res.status(200).json({
      success: true,
      message: "Item updated successfully",
      itemData,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("This id is recived by server: ", id)
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found in database" });
    }

    await Item.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: error.message,
    });
  }
};
