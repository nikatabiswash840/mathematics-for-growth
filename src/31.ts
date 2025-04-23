import sympy
from sympy import symbols, solve

a, b = symbols('a b')
eq1 = 3*a**2 + 4*a*b - 6
solution = solve(eq1, a)
print(solution[0])
