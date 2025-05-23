from sympy import symbols, solve

x = symbols('x')
equation = x**2 - 3*x + 2
roots = solve(equation, x)
print(roots)
