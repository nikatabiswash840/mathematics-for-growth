from sympy import symbols, Eq, solve

x, y = symbols('x y')
equation = Eq(x + 2*y, 10)
solution = solve(equation, (x, y))

print(solution)
