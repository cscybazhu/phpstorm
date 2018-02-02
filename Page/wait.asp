<% var z=caseType; \
     if (z==0) \
     { \
		\getwaitFlag(); \
	 } \
     else if (z==1) \
     { \
        \systemReset(); \
	 } \
	 else if (z==2) \
     { \
          \getwaitSoftwareFlag(); \
	 } \
	 else if (z==3) \
     { \
          \systemSoftwareReset(); \
	 } \
	
	 else if (z==5) \
     { \
          \recieveUpPath(data); \
	 } \		 						
%>