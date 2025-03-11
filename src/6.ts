  import math

def get_random_ts_code():
  """Returns a random time series code"""
  # Generate a random list of numbers between 0 and 100
  data = [random.randint(0, 100) for i in range(10)]
  
  # Create a datetime index with 10 timestamps
  dates = pd.date_range('2023-01-01', periods=len(data), freq='D')
  ts = pd.Series(data, index=dates)
  
  # Calculate the moving average of the time series
  ma = ts.rolling(window=5).mean()
  
  # Return the time series and its moving average
  return ts, ma