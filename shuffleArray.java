import java.util.Arrays;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        int[] array = createAndShuffleArray();
        System.out.println(Arrays.toString(array));
    }

    public static int[] createAndShuffleArray() {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        return array;
    }

    public static void shuffleArray(int[] array) {
        Random random = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int index = random.nextInt(i + 1);
            int temp = array[index];
            array[index] = array[i];
            array[i] = temp;
        }
    }
}