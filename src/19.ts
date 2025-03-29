import sympy as sp
from sympy import symbols, simplify

x, y = symbols('x y')
expr1 = (x - 2)*(y + 3)
expr2 = x**2 - 5*x*y + 6*y**2
expr3 = 2*x + 4*(3*x - y) - y**2 + 1/x

print(simplify(expr1))
print(simplify(expr2))
print(simplify(expr3))
