<% var z=caseType; \
    if (z==0) \
	{ \
		webGetOid(XML,n); \
		webLmtDeviceGetValues(); \
	} \
	else if (z==1) \
	{ \
		Ping(IPorDNS); \
	} \
	else if (z==2) \
	{ \
		TelnetCmd(cmd); \
	} \
	else if (z==3) \
	{ \
		setMulOid(oids,auth); \
	} \
	else if (z==4) \
	{ \
		getMulOid(oids,count,auth); \
	} \
	else if (z==5) \
	{ \
		callSystem(command); \
	} \
	else if (z==6) \
	{ \
		resetAP(); \
	} \
	else if (z==7) \
	{ \
		webLmtGetSsid(); \
	} \
	else if (z==8) \
	{ \
		clientinf(); \
	} \
	else if (z==9) \
	{ \
		dhcpClientInfo(); \
	} \
	else if (z==10) \
	{ \
		webGetCurrentUsernameAuth(); \
	} \
	else if (z==11) \
	{ \
		getUserNameMd5(); \
	} \
	else if (z==12) \
	{ \
		getPasswordMd5(); \
	} \
%>