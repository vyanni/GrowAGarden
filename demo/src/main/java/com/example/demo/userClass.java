public class userAccount{
    private String userName;
    private String passWord;

    public void setuserName(String newUsername){
        userName = newUsername;
    }

    public void setuserName(String newPassword){
        passWord = newPassword;
    }

    public String getuserName(){
        return userName;
    }

    public String getpassWord(){
        return passWord;
    }
}