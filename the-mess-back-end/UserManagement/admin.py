from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.translation import gettext_lazy as _
from UserManagement.models import User


# Register your models here.
class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (
            _("Personal info"),
            {
                "fields": (
                    "first_name",
                    "last_name",
                    "email",
                    "phone_no",
                    "address",
                )
            },
        ),
        (
            _("Role Based Permissions"),
            {
                "fields": (
                    "role",
                    "tier",
                    "max_groups",
                    "max_posts",
                    "max_edits",
                )
            },
        ),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "first_name",
                    "last_name",
                    "email",
                    "phone_no",
                    "address",
                    "role",
                    "tier",
                    "max_groups",
                    "max_posts",
                    "max_edits",
                ),
            },
        ),
    )

    list_display = ("username", "email", "first_name", "last_name", "is_staff")


admin.site.register(User, CustomUserAdmin)
