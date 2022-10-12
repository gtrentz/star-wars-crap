public class Main {
    public static double Eulers(double iX, double iY, double stepSize, double y_of) {
        double y = iY; double r = 0;
        for (double x = iX + stepSize; x < y_of; x += stepSize) {
            r += y + (((Math.pow(x - stepSize, 2) * y) - (0.5 * Math.pow(y, 2))) * 2);
        }
        return r;
    }
    public static void main(String[] args) {
        System.out.println(Eulers(0, 1, 0.2, 0.4));
    }
}
