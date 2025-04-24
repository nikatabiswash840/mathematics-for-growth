import numpy as np
from sympy import symbols, solve

# Define symbols
x, y = symbols('x y')

# Equation: x^2 + y^2 = 1
equation = x**2 + y**2 - 1

# Solve for y
solution_y = solve(equation, y)

print(solution_y)
