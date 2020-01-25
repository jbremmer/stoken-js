#include <stdint.h>
#include <string.h>
#include <securid.h>

const char * stoken_compute_code(char *token, char *pin)
{
    int rc;
	static char buf[BUFLEN];

	size_t stsize = sizeof(struct securid_token);

	if (!stsize)
		return "ERR_TOKEN_FAILED_SIZEOF";

	struct securid_token *t = malloc(stsize);

	memset(t, 0, stsize);

	rc = securid_decode_token(token, t);
	if (rc != ERR_NONE)
		return "ERR_TOKEN_GARBLED";
	
	// xstrncpy(t->pin, pin, MAX_PIN + 1);
	strncpy(t->pin, pin, MAX_PIN + 1);
	t->pin[MAX_PIN] = 0;

	// unlock_token(t, 1, NULL);
	rc = securid_decrypt_seed(t, NULL, NULL);
	if (rc != ERR_NONE)
		return "ERR_TOKEN_DECRYPT_FAILED";

	securid_compute_tokencode(t, time(NULL), buf);


	free(t);

	return buf;
	
}
