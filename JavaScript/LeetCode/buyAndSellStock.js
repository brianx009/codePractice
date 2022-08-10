var maxProfit = function(prices) {
    let profit = 0;                 //profit is set to zero
    let min = prices[0];            //min is set to the first value in the array "prices"
    for(let i = 1; i < prices.length; i++){     //for loop to go throguht the array of prices
        min = Math.min(min, prices[i-1]);       //getting the smallest number between prices[0], and prices[i-1]
        profit = Math.max(prices[i]-min, profit);   //setting profit equal to the max number when comparing prices[i]-min and profit
    }
    return profit;                                  //returns the highest profit possible
};

const input = [7,1,5,3,6,4];
console.log(maxProfit(input));
//profit = 0, min = prices[0] = 7
//iteration 1:
//min(7, prices[1-1]= 7) = (7,7)= 7
//profit(prices[i]-min = 1 - 7= -6,0)= (-6,0) = 0
//profit = 0, min = 7
//iteration 2:
//min(7, prices[i-1]= prices[1]= 1)= (7,1) = 1
//profit(prices[i]-min= 5-1 = 4, 0)= (4,0) = 4
//profit = 4, min = 1 
//iteration 3:
//min(1, prices[3-1]=prices[2]=5)= (1,5) = 1
//profit( prices[3]- min = 3 - 1 = 2,4) = (2,4) = 4
//profit = 4, min = 1
//iteration 4:
//min(1, prices[4-1]= prices[3] = 3) = (1,3)= 1
//profit(prices[4]-1 = 6-1 = 5, 4) = (5,4) = 5
//profit = 5, min = 1
//iteration 5:
//min(1, prices[5-1]= prices[4] = 6) = (1,6) = 1
//profit(prices[5]-1= 4-1 = 3, 5) = (3,5) = 5
//profit = 5, min = 1
//return profit = 5 since we've looped through entirety of numbers
//when working with this question remember to set up a min that will track the smallest number in the list
//and remember to set a max/ Profit that will subtract the numbers with the minimum number and track what number
//has the greatest differneces between them to make our answer