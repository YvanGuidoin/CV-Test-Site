FROM cassandra
MAINTAINER Yvan Guidoin

# File including base data to run on
ADD base_data.cql /base_data.cql

# File launched after server start in background to enter data in cassandra
ADD bg.sh /bg.sh
RUN chmod +x /bg.sh

# Modify the end of the entrypoint instructions to launch the bg.sh in background
RUN sed '$d' /docker-entrypoint.sh > /file.tmp && mv /file.tmp /docker-entrypoint.sh
RUN echo 'cmdBackground="bash /bg.sh"' >> /docker-entrypoint.sh
RUN echo '$cmdBackground &'  >> /docker-entrypoint.sh
RUN echo 'exec "$@"'  >> /docker-entrypoint.sh

# Make the modified file executable
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["-f"]
