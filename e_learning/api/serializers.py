from rest_framework import fields, serializers


class MySerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','code')