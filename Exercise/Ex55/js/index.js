 function solve_quadratic(a, b, c) {
            if (a == 0) {
                if (b == 0) {
                    if (c == 0)
                        return "Infinite solutions";
                    else
                        return "No solution";
                } else {
                    return "Linear equation: x = " + (-c / b);
                }
            }

            const delta = b * b - 4 * a * c;

            if (delta < 0)
                return "No real roots";
            else if (delta === 0) {
                const x = -b / (2 * a);
                return "Double root: x = " + x;
            } else {
                const x1 = (-b + Math.sqrt(delta)) / (2 * a);
                const x2 = (-b - Math.sqrt(delta)) / (2 * a);
                return "x₁ = " + x1 + ", x₂ = " + x2;
            }
        }
function process_quadratic(a,b,c,result) {
            result.innerText = solve_quadratic(a, b, c);
        }
