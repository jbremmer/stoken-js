CC      := emcc
CCFLAGS := -Idependencies/libtomcrypt/src/headers/ -Idependencies/libtomcrypt/src/headers/ -Idependencies/stoken -Idependencies/stoken -Idependencies/stoken/src -WLIBTOMCRYPT_OLD_PKCS_NAMES=0
LDFLAGS := -Ldependencies/libtomcrypt -ltomcrypt -Ldependencies/libtomcrypt

EMCCF   := -s EXPORTED_FUNCTIONS='["_stoken_compute_code"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'
TARGETS := securid.js
DEPS    := dependencies/stoken/src/securid.c dependencies/stoken/src/stc-tomcrypt.c src/token.c

LTOMCFG := -DLTM_DESC

TRGTDIR := lib
build: $(TARGETS)


$(TARGETS):
			$(CC) $(DEPS) -o $(TRGTDIR)/$@ $(EMCCF) $(CCFLAGS) $(LDFLAGS) $(LTOMCFG)


