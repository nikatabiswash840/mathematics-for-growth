import numpy as np

def sample(data, n_samples):
    indices = np.random.choice(len(data), size=n_samples, replace=True)
    return data[indices]

data = np.random.randn(100)  # Generate random data
n_samples = 50  # Number of samples to generate
sampled_data = sample(data, n_samples)
