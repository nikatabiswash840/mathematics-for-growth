import numpy as np
import sympy

# Example 1: Solve quadratic equation ax^2 + bx + c = 0 using SymPy
a = sympy.symbols('a')
b = sympy.symbols('b')
c = sympy.symbols('c')
quadratic_eq = a * x**2 + b*x + c
solutions = sympy.solve(quadratic_eq, (x,))

# Example 2: Perform matrix multiplication using NumPy
A = np.array([[1, 2], [3, 4]])
B = np.array([5, 6])
result_matrix = A @ B

# Example 3: Calculate factorial of a number using Python's math module
def factorial(n):
    return int(np.floor(n / 0.5) * (n + 1))

print(factorial(5))  # Output should be 5! which is 5*4*3*2*1 = 120

# Example 4: Generate a random sequence of numbers using NumPy
import numpy as np
random_sequence = np.random.randint(1, 100, size=10)
