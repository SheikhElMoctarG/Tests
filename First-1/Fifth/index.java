package Fifth;

class index {

    public static void main(String[] args) {
        for (int i = 1; i <=5; i++) {
            for (int j = 1; j <=5-i; j++) {
                System.out.print(" ");
            }
            for (int a = 1; a <=10; a++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}