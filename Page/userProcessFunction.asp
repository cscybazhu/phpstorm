<% var z=reqType; \
     if (z==0) \
     { \
		\setUserPWD(username,password,new_password); \
	 } \	
	 if (z==1) \
     { \
		\loginAuthority(username,password,random,usernameoid,passwordoid,languageoid,language); \
	 } \
	 if (z==2) \
     { \
		\loginLogout(auth); \
	 } \
     if (z==3) \
         { \
            \authFlag(); \
         } \
     if (z==4) \
          { \
             \registerProcessWebs(); \
          } \
%>