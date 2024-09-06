# Shared

Types:

- <code><a href="./src/resources/shared.ts">Comment</a></code>
- <code><a href="./src/resources/shared.ts">Comments</a></code>
- <code><a href="./src/resources/shared.ts">Posts</a></code>
- <code><a href="./src/resources/shared.ts">ProfileUpdateResponse</a></code>
- <code><a href="./src/resources/shared.ts">Space</a></code>
- <code><a href="./src/resources/shared.ts">UserLikes</a></code>

# AdvancedSearch

Types:

- <code><a href="./src/resources/advanced-search.ts">AdvancedSearchResults</a></code>

Methods:

- <code title="get /api/headless/v1/advanced_search">client.advancedSearch.<a href="./src/resources/advanced-search.ts">search</a>({ ...params }) -> AdvancedSearchResults</code>

# Bookmarks

Types:

- <code><a href="./src/resources/bookmarks.ts">Bookmark</a></code>
- <code><a href="./src/resources/bookmarks.ts">Bookmarks</a></code>

Methods:

- <code title="post /api/headless/v1/bookmarks">client.bookmarks.<a href="./src/resources/bookmarks.ts">create</a>({ ...params }) -> Bookmark</code>
- <code title="get /api/headless/v1/bookmarks">client.bookmarks.<a href="./src/resources/bookmarks.ts">list</a>({ ...params }) -> Bookmarks</code>
- <code title="delete /api/headless/v1/bookmarks/{id}">client.bookmarks.<a href="./src/resources/bookmarks.ts">delete</a>(id) -> void</code>

# Messages

## ChatRoomMessages

Types:

- <code><a href="./src/resources/messages/chat-room-messages.ts">ChatRoomMessage</a></code>
- <code><a href="./src/resources/messages/chat-room-messages.ts">ChatRoomMessages</a></code>
- <code><a href="./src/resources/messages/chat-room-messages.ts">ChatRoomMessageCreateResponse</a></code>

Methods:

- <code title="post /api/headless/v1/messages/{chat_room_uuid}/chat_room_messages">client.messages.chatRoomMessages.<a href="./src/resources/messages/chat-room-messages.ts">create</a>(chatRoomUuid, { ...params }) -> ChatRoomMessageCreateResponse</code>
- <code title="get /api/headless/v1/messages/{chat_room_uuid}/chat_room_messages/{id}">client.messages.chatRoomMessages.<a href="./src/resources/messages/chat-room-messages.ts">retrieve</a>(chatRoomUuid, id) -> ChatRoomMessage</code>
- <code title="put /api/headless/v1/messages/{chat_room_uuid}/chat_room_messages/{id}">client.messages.chatRoomMessages.<a href="./src/resources/messages/chat-room-messages.ts">update</a>(chatRoomUuid, id, { ...params }) -> ChatRoomMessage</code>
- <code title="get /api/headless/v1/messages/{chat_room_uuid}/chat_room_messages">client.messages.chatRoomMessages.<a href="./src/resources/messages/chat-room-messages.ts">list</a>(chatRoomUuid, { ...params }) -> ChatRoomMessages</code>
- <code title="delete /api/headless/v1/messages/{chat_room_uuid}/chat_room_messages/{id}">client.messages.chatRoomMessages.<a href="./src/resources/messages/chat-room-messages.ts">delete</a>(chatRoomUuid, id) -> void</code>

## ChatRoomParticipants

Types:

- <code><a href="./src/resources/messages/chat-room-participants.ts">ChatRoomParticipants</a></code>

Methods:

- <code title="get /api/headless/v1/messages/{chat_room_uuid}/chat_room_participants">client.messages.chatRoomParticipants.<a href="./src/resources/messages/chat-room-participants.ts">list</a>(chatRoomUuid, { ...params }) -> ChatRoomParticipants</code>

# ChatRooms

Types:

- <code><a href="./src/resources/chat-rooms/chat-rooms.ts">ChatRoom</a></code>
- <code><a href="./src/resources/chat-rooms/chat-rooms.ts">ChatRooms</a></code>
- <code><a href="./src/resources/chat-rooms/chat-rooms.ts">Empty</a></code>

Methods:

- <code title="post /api/headless/v1/messages">client.chatRooms.<a href="./src/resources/chat-rooms/chat-rooms.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/headless/v1/messages/{uuid}">client.chatRooms.<a href="./src/resources/chat-rooms/chat-rooms.ts">retrieve</a>(uuid) -> ChatRoom</code>
- <code title="get /api/headless/v1/messages">client.chatRooms.<a href="./src/resources/chat-rooms/chat-rooms.ts">list</a>({ ...params }) -> ChatRooms</code>
- <code title="post /api/headless/v1/messages/{uuid}/mark_all_as_read">client.chatRooms.<a href="./src/resources/chat-rooms/chat-rooms.ts">markAllAsRead</a>(uuid) -> unknown</code>

## ChatRoomParticipants

Methods:

- <code title="put /api/headless/v1/messages/{chat_room_uuid}/chat_room_participants/{id}">client.chatRooms.chatRoomParticipants.<a href="./src/resources/chat-rooms/chat-room-participants.ts">update</a>(chatRoomUuid, id, { ...params }) -> ChatRoom</code>

## UnreadChatRooms

Types:

- <code><a href="./src/resources/chat-rooms/unread-chat-rooms.ts">UnreadChatRooms</a></code>

Methods:

- <code title="get /api/headless/v1/messages/unread_chat_rooms">client.chatRooms.unreadChatRooms.<a href="./src/resources/chat-rooms/unread-chat-rooms.ts">list</a>() -> UnreadChatRooms</code>

# ChatThreads

Types:

- <code><a href="./src/resources/chat-threads/chat-threads.ts">ChatThread</a></code>
- <code><a href="./src/resources/chat-threads/chat-threads.ts">ChatThreads</a></code>

Methods:

- <code title="get /api/headless/v1/chat_threads/{id}">client.chatThreads.<a href="./src/resources/chat-threads/chat-threads.ts">retrieve</a>(id) -> ChatThread</code>
- <code title="get /api/headless/v1/chat_threads">client.chatThreads.<a href="./src/resources/chat-threads/chat-threads.ts">list</a>({ ...params }) -> ChatThreads</code>

## UnreadChatThreads

Types:

- <code><a href="./src/resources/chat-threads/unread-chat-threads.ts">UnreadChatThreadListResponse</a></code>

Methods:

- <code title="get /api/headless/v1/chat_threads/unread_chat_threads">client.chatThreads.unreadChatThreads.<a href="./src/resources/chat-threads/unread-chat-threads.ts">list</a>() -> UnreadChatThreadListResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts/posts.ts">ImagePost</a></code>

Methods:

- <code title="post /api/headless/v1/spaces/{space_id}/images/posts">client.posts.<a href="./src/resources/posts/posts.ts">create</a>({ ...params }) -> ImagePost</code>
- <code title="put /api/headless/v1/spaces/{space_id}/images/posts/{id}">client.posts.<a href="./src/resources/posts/posts.ts">update</a>(id, { ...params }) -> ImagePost</code>

## Comments

Types:

- <code><a href="./src/resources/posts/comments.ts">CommentRemoveResponse</a></code>

Methods:

- <code title="post /api/headless/v1/posts/{post_id}/comments">client.posts.comments.<a href="./src/resources/posts/comments.ts">create</a>(postId, { ...params }) -> Comment</code>
- <code title="get /api/headless/v1/posts/{post_id}/comments/{id}">client.posts.comments.<a href="./src/resources/posts/comments.ts">retrieve</a>(postId, id) -> Comment</code>
- <code title="get /api/headless/v1/posts/{post_id}/comments">client.posts.comments.<a href="./src/resources/posts/comments.ts">list</a>(postId, { ...params }) -> Comments</code>
- <code title="delete /api/headless/v1/posts/{post_id}/comments/{id}">client.posts.comments.<a href="./src/resources/posts/comments.ts">remove</a>(postId, id) -> CommentRemoveResponse</code>

## PostFollowers

Types:

- <code><a href="./src/resources/posts/post-followers.ts">PostFollowerCreateResponse</a></code>
- <code><a href="./src/resources/posts/post-followers.ts">PostFollowerDeleteResponse</a></code>

Methods:

- <code title="post /api/headless/v1/posts/{post_id}/post_followers">client.posts.postFollowers.<a href="./src/resources/posts/post-followers.ts">create</a>(postId) -> PostFollowerCreateResponse</code>
- <code title="delete /api/headless/v1/posts/{post_id}/post_followers/{id}">client.posts.postFollowers.<a href="./src/resources/posts/post-followers.ts">delete</a>(postId, id) -> PostFollowerDeleteResponse</code>

## UserLikes

Types:

- <code><a href="./src/resources/posts/user-likes.ts">UserLikeCreateResponse</a></code>
- <code><a href="./src/resources/posts/user-likes.ts">UserLikeDeleteResponse</a></code>

Methods:

- <code title="post /api/headless/v1/posts/{post_id}/user_likes">client.posts.userLikes.<a href="./src/resources/posts/user-likes.ts">create</a>(postId) -> UserLikeCreateResponse</code>
- <code title="get /api/headless/v1/posts/{post_id}/user_likes">client.posts.userLikes.<a href="./src/resources/posts/user-likes.ts">list</a>(postId, { ...params }) -> UserLikes</code>
- <code title="delete /api/headless/v1/posts/{post_id}/user_likes">client.posts.userLikes.<a href="./src/resources/posts/user-likes.ts">delete</a>(postId) -> UserLikeDeleteResponse</code>

# CommunityLinks

Types:

- <code><a href="./src/resources/community-links.ts">CommunityLinks</a></code>

Methods:

- <code title="get /api/headless/v1/community_links">client.communityLinks.<a href="./src/resources/community-links.ts">list</a>() -> CommunityLinks</code>

# CommunityMembers

Types:

- <code><a href="./src/resources/community-members/community-members.ts">CommunityMembers</a></code>
- <code><a href="./src/resources/community-members/community-members.ts">CurrentCommunityMember</a></code>
- <code><a href="./src/resources/community-members/community-members.ts">MemberDeactivated</a></code>

Methods:

- <code title="get /api/headless/v1/community_member">client.communityMembers.<a href="./src/resources/community-members/community-members.ts">retrieve</a>() -> CurrentCommunityMember</code>
- <code title="get /api/headless/v1/community_members">client.communityMembers.<a href="./src/resources/community-members/community-members.ts">list</a>({ ...params }) -> CommunityMembers</code>
- <code title="delete /api/headless/v1/community_member/deactivate">client.communityMembers.<a href="./src/resources/community-members/community-members.ts">deactivate</a>() -> MemberDeactivated</code>

## Comments

Methods:

- <code title="get /api/headless/v1/community_members/{community_member_id}/comments">client.communityMembers.comments.<a href="./src/resources/community-members/comments.ts">list</a>(communityMemberId, { ...params }) -> Comments</code>

## Posts

Methods:

- <code title="get /api/headless/v1/community_members/{community_member_id}/posts">client.communityMembers.posts.<a href="./src/resources/community-members/posts.ts">list</a>(communityMemberId, { ...params }) -> Posts</code>

## Spaces

Types:

- <code><a href="./src/resources/community-members/spaces.ts">PaginatedSpaces</a></code>

Methods:

- <code title="get /api/headless/v1/community_members/{community_member_id}/spaces">client.communityMembers.spaces.<a href="./src/resources/community-members/spaces.ts">list</a>(communityMemberId, { ...params }) -> PaginatedSpaces</code>

## PublicProfile

Types:

- <code><a href="./src/resources/community-members/public-profile.ts">PublicProfile</a></code>

Methods:

- <code title="get /api/headless/v1/community_members/{community_member_id}/public_profile">client.communityMembers.publicProfile.<a href="./src/resources/community-members/public-profile.ts">retrieve</a>(communityMemberId) -> PublicProfile</code>

# Cookies

Types:

- <code><a href="./src/resources/cookies.ts">CookiesDestroyed</a></code>
- <code><a href="./src/resources/cookies.ts">CookiesGenerated</a></code>

Methods:

- <code title="post /api/headless/v1/cookies">client.cookies.<a href="./src/resources/cookies.ts">create</a>() -> CookiesGenerated</code>
- <code title="delete /api/headless/v1/cookies">client.cookies.<a href="./src/resources/cookies.ts">delete</a>() -> CookiesDestroyed</code>

# Courses

## Lessons

Types:

- <code><a href="./src/resources/courses/lessons/lessons.ts">Lesson</a></code>
- <code><a href="./src/resources/courses/lessons/lessons.ts">LessonFiles</a></code>

Methods:

- <code title="get /api/headless/v1/courses/{course_id}/lessons/{id}">client.courses.lessons.<a href="./src/resources/courses/lessons/lessons.ts">retrieve</a>(courseId, id) -> Lesson</code>

### Files

Methods:

- <code title="get /api/headless/v1/courses/{course_id}/lessons/{lesson_id}/files">client.courses.lessons.files.<a href="./src/resources/courses/lessons/files.ts">list</a>(courseId, lessonId, { ...params }) -> LessonFiles</code>

### Progress

Types:

- <code><a href="./src/resources/courses/lessons/progress.ts">ProgressUpdateResponse</a></code>

Methods:

- <code title="patch /api/headless/v1/courses/{course_id}/lessons/{lesson_id}/progress">client.courses.lessons.progress.<a href="./src/resources/courses/lessons/progress.ts">update</a>(courseId, lessonId, { ...params }) -> ProgressUpdateResponse</code>

## Sections

Types:

- <code><a href="./src/resources/courses/sections.ts">Sections</a></code>

Methods:

- <code title="get /api/headless/v1/courses/{course_id}/sections">client.courses.sections.<a href="./src/resources/courses/sections.ts">list</a>(courseId) -> Sections</code>

# Events

## EventAttendees

Types:

- <code><a href="./src/resources/events/event-attendees.ts">EventAttendee</a></code>
- <code><a href="./src/resources/events/event-attendees.ts">EventAttendees</a></code>

Methods:

- <code title="post /api/headless/v1/events/{event_id}/event_attendees">client.events.eventAttendees.<a href="./src/resources/events/event-attendees.ts">create</a>(eventId) -> EventAttendee</code>
- <code title="get /api/headless/v1/events/{event_id}/event_attendees">client.events.eventAttendees.<a href="./src/resources/events/event-attendees.ts">list</a>(eventId, { ...params }) -> EventAttendees</code>
- <code title="delete /api/headless/v1/events/{event_id}/event_attendees">client.events.eventAttendees.<a href="./src/resources/events/event-attendees.ts">delete</a>(eventId) -> EventAttendee</code>

# FlaggedContents

Types:

- <code><a href="./src/resources/flagged-contents.ts">FlaggedContentCreateResponse</a></code>

Methods:

- <code title="post /api/headless/v1/flagged_contents">client.flaggedContents.<a href="./src/resources/flagged-contents.ts">create</a>({ ...params }) -> FlaggedContentCreateResponse</code>

# HomePage

Methods:

- <code title="get /api/headless/v1/home">client.homePage.<a href="./src/resources/home-page.ts">retrieve</a>({ ...params }) -> Posts</code>

# InvitationLinks

Types:

- <code><a href="./src/resources/invitation-links.ts">InvitationLinkJoinResponse</a></code>

Methods:

- <code title="post /api/headless/v1/invitation_links/{token}/join">client.invitationLinks.<a href="./src/resources/invitation-links.ts">join</a>(token) -> InvitationLinkJoinResponse</code>

# LiveStreams

## Rooms

Types:

- <code><a href="./src/resources/live-streams/rooms.ts">LiveRoom</a></code>

Methods:

- <code title="post /api/headless/v1/live_streams/rooms">client.liveStreams.rooms.<a href="./src/resources/live-streams/rooms.ts">create</a>({ ...params }) -> LiveRoom</code>

# NotificationPreferences

Types:

- <code><a href="./src/resources/notification-preferences/notification-preferences.ts">MediumNotificationPreferences</a></code>
- <code><a href="./src/resources/notification-preferences/notification-preferences.ts">MediumNotificationPreferencesUpdate</a></code>

Methods:

- <code title="get /api/headless/v1/notification_preferences/{medium}">client.notificationPreferences.<a href="./src/resources/notification-preferences/notification-preferences.ts">retrieve</a>(medium) -> MediumNotificationPreferences</code>
- <code title="put /api/headless/v1/notification_preferences/{medium}">client.notificationPreferences.<a href="./src/resources/notification-preferences/notification-preferences.ts">update</a>(medium, { ...params }) -> MediumNotificationPreferencesUpdate</code>

## SpaceMembers

Types:

- <code><a href="./src/resources/notification-preferences/space-members.ts">SpaceMemberNotificationPreferences</a></code>

Methods:

- <code title="get /api/headless/v1/notification_preferences/space_members/{id}">client.notificationPreferences.spaceMembers.<a href="./src/resources/notification-preferences/space-members.ts">retrieve</a>(id) -> SpaceMemberNotificationPreferences</code>

## Spaces

Types:

- <code><a href="./src/resources/notification-preferences/spaces.ts">MediumSpaceNotificationPreferencesUpdate</a></code>
- <code><a href="./src/resources/notification-preferences/spaces.ts">MediumSpaceNotificationPreferencesUpdateAll</a></code>

Methods:

- <code title="put /api/headless/v1/notification_preferences/{notification_preference_medium}/spaces/{id}">client.notificationPreferences.spaces.<a href="./src/resources/notification-preferences/spaces.ts">update</a>(notificationPreferenceMedium, id, { ...params }) -> MediumSpaceNotificationPreferencesUpdate</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications.ts">NewNotificationsCount</a></code>
- <code><a href="./src/resources/notifications.ts">Notification</a></code>
- <code><a href="./src/resources/notifications.ts">Notifications</a></code>
- <code><a href="./src/resources/notifications.ts">ResetNewNotificationsCount</a></code>

Methods:

- <code title="get /api/headless/v1/notifications">client.notifications.<a href="./src/resources/notifications.ts">list</a>({ ...params }) -> Notifications</code>
- <code title="delete /api/headless/v1/notifications/{id}">client.notifications.<a href="./src/resources/notifications.ts">delete</a>(id) -> Notification</code>
- <code title="post /api/headless/v1/notifications/{id}/archive">client.notifications.<a href="./src/resources/notifications.ts">archive</a>(id) -> Notification</code>
- <code title="post /api/headless/v1/notifications/mark_all_as_read">client.notifications.<a href="./src/resources/notifications.ts">markAllAsRead</a>({ ...params }) -> void</code>
- <code title="post /api/headless/v1/notifications/{id}/mark_as_read">client.notifications.<a href="./src/resources/notifications.ts">markAsRead</a>(id) -> Notification</code>
- <code title="get /api/headless/v1/notifications/new_notifications_count">client.notifications.<a href="./src/resources/notifications.ts">newNotificationsCount</a>() -> NewNotificationsCount</code>
- <code title="post /api/headless/v1/notifications/reset_new_notifications_count">client.notifications.<a href="./src/resources/notifications.ts">resetNewNotificationsCount</a>() -> ResetNewNotificationsCount</code>

# Spaces

Types:

- <code><a href="./src/resources/spaces/spaces.ts">Spaces</a></code>

Methods:

- <code title="get /api/headless/v1/spaces/{id}">client.spaces.<a href="./src/resources/spaces/spaces.ts">retrieve</a>(id) -> Space</code>
- <code title="get /api/headless/v1/spaces">client.spaces.<a href="./src/resources/spaces/spaces.ts">list</a>() -> Spaces</code>
- <code title="post /api/headless/v1/spaces/{id}/join">client.spaces.<a href="./src/resources/spaces/spaces.ts">join</a>(id) -> Space</code>
- <code title="post /api/headless/v1/spaces/{id}/leave">client.spaces.<a href="./src/resources/spaces/spaces.ts">leave</a>(id) -> Space</code>

## Posts

Types:

- <code><a href="./src/resources/spaces/posts.ts">Post</a></code>
- <code><a href="./src/resources/spaces/posts.ts">PostDeleteResponse</a></code>

Methods:

- <code title="post /api/headless/v1/spaces/{space_id}/posts">client.spaces.posts.<a href="./src/resources/spaces/posts.ts">create</a>({ ...params }) -> Post</code>
- <code title="get /api/headless/v1/spaces/{space_id}/posts/{id}">client.spaces.posts.<a href="./src/resources/spaces/posts.ts">retrieve</a>(spaceId, id) -> Post</code>
- <code title="get /api/headless/v1/spaces/{space_id}/posts">client.spaces.posts.<a href="./src/resources/spaces/posts.ts">list</a>(spaceId, { ...params }) -> Posts</code>
- <code title="delete /api/headless/v1/spaces/{space_id}/posts/{id}">client.spaces.posts.<a href="./src/resources/spaces/posts.ts">delete</a>(spaceId, id) -> PostDeleteResponse</code>

## Events

### RecurringEvents

Types:

- <code><a href="./src/resources/spaces/events/recurring-events.ts">RecurringEvents</a></code>
- <code><a href="./src/resources/spaces/events/recurring-events.ts">RecurringEventRsvpResponse</a></code>

Methods:

- <code title="get /api/headless/v1/spaces/{space_id}/events/{event_id}/recurring_events">client.spaces.events.recurringEvents.<a href="./src/resources/spaces/events/recurring-events.ts">list</a>(spaceId, eventId, { ...params }) -> RecurringEvents</code>
- <code title="put /api/headless/v1/spaces/{space_id}/events/{event_id}/recurring_events/rsvp">client.spaces.events.recurringEvents.<a href="./src/resources/spaces/events/recurring-events.ts">rsvp</a>(spaceId, eventId, { ...params }) -> RecurringEventRsvpResponse</code>

## Bookmarks

Types:

- <code><a href="./src/resources/spaces/bookmarks.ts">SpaceBookmarks</a></code>

Methods:

- <code title="get /api/headless/v1/spaces/{space_id}/bookmarks">client.spaces.bookmarks.<a href="./src/resources/spaces/bookmarks.ts">list</a>(spaceId, { ...params }) -> SpaceBookmarks</code>

## Home

Methods:

- <code title="get /api/headless/v1/spaces/home">client.spaces.home.<a href="./src/resources/spaces/home.ts">retrieve</a>() -> Space</code>

# Profile

Methods:

- <code title="put /api/headless/v1/profile">client.profile.<a href="./src/resources/profile.ts">update</a>({ ...params }) -> ProfileUpdateResponse</code>

# Reactions

Types:

- <code><a href="./src/resources/reactions.ts">CreateReactionResponse</a></code>

Methods:

- <code title="post /api/headless/v1/reactions">client.reactions.<a href="./src/resources/reactions.ts">create</a>({ ...params }) -> CreateReactionResponse</code>

# Comments

## Replies

Types:

- <code><a href="./src/resources/comments/replies.ts">ReplyDeleteResponse</a></code>

Methods:

- <code title="post /api/headless/v1/comments/{comment_id}/replies">client.comments.replies.<a href="./src/resources/comments/replies.ts">create</a>(commentId, { ...params }) -> Comment</code>
- <code title="get /api/headless/v1/comments/{comment_id}/replies/{id}">client.comments.replies.<a href="./src/resources/comments/replies.ts">retrieve</a>(commentId, id) -> Comment</code>
- <code title="get /api/headless/v1/comments/{comment_id}/replies">client.comments.replies.<a href="./src/resources/comments/replies.ts">list</a>(commentId, { ...params }) -> Comments</code>
- <code title="delete /api/headless/v1/comments/{comment_id}/replies/{id}">client.comments.replies.<a href="./src/resources/comments/replies.ts">delete</a>(commentId, id) -> ReplyDeleteResponse</code>

## UserLikes

Types:

- <code><a href="./src/resources/comments/user-likes.ts">UserLikeCreateResponse</a></code>
- <code><a href="./src/resources/comments/user-likes.ts">UserLikeDeleteResponse</a></code>

Methods:

- <code title="post /api/headless/v1/comments/{comment_id}/user_likes">client.comments.userLikes.<a href="./src/resources/comments/user-likes.ts">create</a>(commentId) -> UserLikeCreateResponse</code>
- <code title="get /api/headless/v1/comments/{comment_id}/user_likes">client.comments.userLikes.<a href="./src/resources/comments/user-likes.ts">list</a>(commentId, { ...params }) -> UserLikes</code>
- <code title="delete /api/headless/v1/comments/{comment_id}/user_likes">client.comments.userLikes.<a href="./src/resources/comments/user-likes.ts">delete</a>(commentId) -> UserLikeDeleteResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchResults</a></code>

Methods:

- <code title="get /api/headless/v1/search">client.search.<a href="./src/resources/search.ts">list</a>({ ...params }) -> SearchResults</code>

# Signup

## Profile

Methods:

- <code title="put /api/headless/v1/signup/profile">client.signup.profile.<a href="./src/resources/signup/profile.ts">update</a>({ ...params }) -> ProfileUpdateResponse</code>

# SpaceMembers

Types:

- <code><a href="./src/resources/space-members.ts">SpaceMemberMarkAsReadResponse</a></code>

Methods:

- <code title="post /api/headless/v1/space_members/{id}/mark_as_read">client.spaceMembers.<a href="./src/resources/space-members.ts">markAsRead</a>(id) -> SpaceMemberMarkAsReadResponse</code>

# SpaceNotificationDetails

Types:

- <code><a href="./src/resources/space-notification-details.ts">SpaceNotificationDetails</a></code>

Methods:

- <code title="get /api/headless/v1/space_notification_details">client.spaceNotificationDetails.<a href="./src/resources/space-notification-details.ts">list</a>({ ...params }) -> SpaceNotificationDetails</code>
