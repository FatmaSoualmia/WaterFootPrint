from sklearn.linear_model import LinearRegression
import numpy as np
import pickle

# Sample data - this should be replaced with actual training data
# X: features (e.g., number of people, average shower, low-flow shower)
# y: target (water footprint)
X = np.array([
    [1, 5, 1],  # 1 person, 5 mins shower, low flow
    [2, 10, 0], # 2 people, 10 mins shower, no low flow
    [3, 7, 1],  # 3 people, 7 mins shower, low flow
    [4, 15, 0], # 4 people, 15 mins shower, no low flow
])
y = np.array([100, 200, 150, 250])  # corresponding water footprints

# Train the model
model = LinearRegression()
model.fit(X, y)

# Save the model to a file
with open('water_footprint_model.pkl', 'wb') as file:
    pickle.dump(model, file)
