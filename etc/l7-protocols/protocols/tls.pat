# SSL and TLS - Secure Socket Layer / Transport Layer Security - RFC 2246
# Pattern attributes: good fast superset
# Protocol groups: ietf_proposed_standard secure
# Wiki: http://www.protocolinfo.org/wiki/SSL
#
# Usually runs on port 443
#
# This is a superset of validcertssl.  For it to match, it must be first.
# 
# This pattern has been tested and is believed to work well.

ssl
# Client Hello | Server Hello with certificate
# This allows SSL 3.X, which includes TLS 1.0, known internally as SSL 3.1
^(.?.?\x16\x03.*\x16\x03|.?.?\x01\x03\x01?.*\x0b)
