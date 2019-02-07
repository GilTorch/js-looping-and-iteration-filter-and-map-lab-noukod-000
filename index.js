// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
    return drivers.filter((driver)=>driver.revenue > revenue);
}


function driversNameWithRevenueOver(drivers,revenue){
  return driverNamesWithRevenueOver(drivers,revenue).map((driver)=>driver.name)
}