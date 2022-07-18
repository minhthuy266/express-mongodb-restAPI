// @desc   Get goal
// @route  GET /api/goal
// @access PRIVATE

const getGoal = (req, res) => {
  res.status(200).json({
    message: "Get goal",
  });
};

// @desc   Set goal
// @route  POST /api/goal
// @access PRIVATE

const setGoal = (req, res) => {
  res.status(200).json({
    message: "Set goal",
  });
};

// @desc   Update goal
// @route  PUT /api/goal/:id
// @access PRIVATE

const updateGoal = (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
};

// @desc   Delete goal
// @route  DELETE /api/goal/:id
// @access PRIVATE

const deleteGoal = (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
};

module.exports = { getGoal, setGoal, updateGoal, deleteGoal };
