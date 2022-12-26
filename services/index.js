exports.getAll = async (model) => {
  return await model.find();
};

exports.create = async (model, value) => {
  return await model.create(value);
};
exports.getById = async (model, id) => {
  return await model.findById(id);
};

exports.update = async (model, id, value) => {
  return await model.findByIdAndUpdate(id, value);
};

exports.delete = async (model, id) => {
  return await model.findByIdAndDelete(id);
};
