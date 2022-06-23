module.exports = (mongoose) => {
  const FoodSchema = mongoose.model(
    "food_record",
    mongoose.Schema(
      {
        name: String,
        stock: Number,
        dayofweek: Number,
      },
      { timestamps: true }
    )
  );

  return FoodSchema;
};
