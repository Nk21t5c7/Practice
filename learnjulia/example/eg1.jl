using CSV
using DataFrames

# XLSX.readxlsx("performance_predict_data.xlsx")

# XLSX.openxlsx("performance_predict_data.xlsx") do xf
#     println("Sheet names: ", XLSX.sheetnames(xf))
# end
df = DataFrame(CSV.File("performance_predict_data.csv"))
dropmissing!(df)


using MLDataUtils
using Random
Random.seed!(123)
train_set, test_set = splitobs(shuffleobs(df), at=0.9)

using GLM
glreg = lm(@formula(Performance_Score ~ Height_cm + Weight_kg + Training_Hours_per_Week + Years_of_Experience + Reaction_Time_sec + Flexibility_score), train_set,
)
pred = predict(glreg, test_set)
comparison = DataFrame(Dict(:Prediction => pred, :Actual => test_set.Performance_Score))


# random forest 
using DecisionTree
performance_score = Vector(train_set.Performance_Score)
feat = Matrix(train_set[:, ["Height_cm", "Weight_kg", "Training_Hours_per_Week", "Years_of_Experience", "Flexibility_score", "Reaction_Time_sec"]])
model = DecisionTree.RandomForestRegressor(n_trees=100)
DecisionTree.fit!(model, feat, performance_score)
test_feat = Matrix(test_set[:, ["Height_cm", "Weight_kg", "Training_Hours_per_Week", "Years_of_Experience", "Flexibility_score", "Reaction_Time_sec"]])
y_pred = DecisionTree.predict(model, test_feat)
comparison_tree = DataFrame(Dict(:Prediction => y_pred, :Actual => test_set.Performance_Score))


using StatsPlots
theme(:ggplot2)

plot(train_set.Performance_Score)

p1 = scatter(train_set.Performance_Score, pred, xlabel="Performance Score", ylabel="Predicted Score", legend=:topleft, color=:blue, fmt=:svg)
plot!(test_set.Performance_Score, pred, color=:red, linestyle=:dash)

p2 = scatter(test_set.Performance_Score, y_pred, xlabel="Performance Score", ylabel="Predicted Score(Tree)", legend=:topleft, color=:blue, fmt=:svg)
plot!(test_set.Performance_Score, y_pred, color=:red, linestyle=:dash)

plot(p1, p2, layout=(1, 2))

using Statistics
# linear model
mse_glm = mean((pred .- test_set.Performance_Score) .^ 2)
rmse_glm = sqrt(mse_glm)
mae_glm = mean(abs.(pred .- test_set.Performance_Score))
r2_glm = 1 - sum((pred .- test_set.Performance_Score) .^ 2) / 
sum((test_set.Performance_Score .- mean(test_set.Performance_Score)) .^ 2)

# Random forest
mse_for = mean((y_pred .- test_set.Performance_Score) .^ 2)
rmse_for = sqrt(mse_for)
mae_for = mean(abs.(y_pred .- test_set.Performance_Score))
r2_for = 1 - sum((y_pred .- test_set.Performance_Score) .^ 2) / 
sum((test_set.Performance_Score .- mean(test_set.Performance_Score)) .^ 2)

