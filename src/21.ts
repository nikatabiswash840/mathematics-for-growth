from sympy import symbols, solve

x = symbols('x')
equation = x**3 - 6*x**2 + 10*x - 5
solution = solve(equation, x)
print(solution)
