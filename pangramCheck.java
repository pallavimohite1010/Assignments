import java.util.HashSet;
import java.util.Set;

public class Main {

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        System.out.println(isPangram(input));
    }

    public static boolean isPangram(String input) {
        Set<Character> alphabetSet = new HashSet<>();
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                alphabetSet.add(Character.toLowerCase(c));
            }
        }
        return alphabetSet.size() == 26;
    }
}