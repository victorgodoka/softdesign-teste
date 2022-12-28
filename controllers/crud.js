const Services = require("../services");

exports._getAll = async (req, res, model) => {
  try {
    const values = await Services.getAll(model);
    res.json({ data: values, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports._create = async (req, res, model) => {
  try {
    const value = await Services.create(model, req.body);
    res.json({ data: value, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports._getById = async (req, res, model) => {
  try {
    const value = await Services.getById(model, req.params.id);
    res.json({ data: value, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports._update = async (req, res, model) => {
  try {
    const value = await Services.update(model, req.params.id, req.body);
    res.json({ data: value, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports._delete = async (req, res, model) => {
  try {
    const value = await Services.delete(model, req.params.id);
    res.json({ data: value, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
