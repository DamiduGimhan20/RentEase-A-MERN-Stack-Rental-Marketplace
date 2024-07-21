export const formatDate = (dateString) => {
    // Define the options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // Create a new Date object from the dateString and format it using the options
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Function to calculate the duration in days between two dates
  export const calculateRentalDuration = (startDate, endDate) => {
    // Convert startDate and endDate to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);
    // Calculate the difference in time between the start and end dates
    const differenceInTime = end.getTime() - start.getTime();
    // Convert the difference in time to days and round up to the nearest whole number
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
  };
  
  // Function to calculate the total cost of a rental
  export const calculateTotalCost = (pricePerDay, startDate, endDate) => {
    // Calculate the duration of the rental in days
    const duration = calculateRentalDuration(startDate, endDate);
    // Calculate the total cost by multiplying the duration by the price per day
    return duration * pricePerDay;
  };
  