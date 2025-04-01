import numpy as np
from sklearn.linear_model import LinearRegression

x = np.array([[1, 2], [3, 4], [5, 6]])
y = np.array([7, 8, 9])

model = LinearRegression().fit(x, y)
print(model.coef_)
