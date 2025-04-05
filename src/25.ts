import sympy as sp
from sympy import symbols

x = symbols('x')
expr = x**3 - 6*x + 1
expr.expand()
