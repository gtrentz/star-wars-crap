public class Main {
    public static void main(String[] args) {
        //int i = 0;
        //while (true) {
            for (int i = 0; i < Integer.MAX_VALUE; i+= 1) {
               if (((Math.pow(4, i + 1) + Math.pow(5, (2 * i) - 1))) % 21 == 0) {
                   System.out.println(i + ": Yes");
               } else {
                   System.out.println(i + ": No");
               }
            }
            //i++;
        }
    }

