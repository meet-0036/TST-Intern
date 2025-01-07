public class sumOfArray {

    public static void main(String[] args) {

        int a[] = { -5, -4, 0, 10, -7 };
        int max = 0;
        int curr = 0;

        for (int i = 0; i < a.length; i++) {
            curr += a[i];
            max = Math.max(max, curr);
        }
        System.out.println(max);
    }
}