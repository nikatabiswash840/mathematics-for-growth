import math

def calculate_gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def calculate_lcm(x, y):
    return abs(x * y) // gcd(x, y)

# Example usage
num1 = 8
num2 = 12
gcd_result = calculate_gcd(num1, num2)
lcm_result = calculate_lcm(gcd_result, num2)
print(f"GCD of {num1} and {num2} is: {gcd_result}")
print(f"LCM of {num1} and {num2} is: {lcm_result}")
