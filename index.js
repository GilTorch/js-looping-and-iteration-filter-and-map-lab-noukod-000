// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
    return drivers.filter((driver)=>driver.revenue > revenue);
}


function driverNamesWithRevenueOver(drivers,revenue){
  return driverWithRevenueOver(drivers,revenue).map((driver)=>driver.name)
}
